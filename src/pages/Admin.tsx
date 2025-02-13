
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
      return;
    }

    const { data, error } = await supabase
      .rpc('has_role', { role: 'admin' });

    if (error || !data) {
      navigate("/");
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      });
      return;
    }

    setIsAdmin(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Not authenticated");

      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const { error } = await supabase
        .from("posts")
        .insert({
          title,
          content,
          excerpt,
          category,
          image_url: imageUrl,
          slug,
          author_id: session.user.id,
          published: true,
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Post created successfully!",
      });

      // Reset form
      setTitle("");
      setContent("");
      setExcerpt("");
      setCategory("");
      setImageUrl("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter post title"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="excerpt" className="text-sm font-medium">
              Excerpt
            </label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
              placeholder="Enter post excerpt"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">
              Content
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder="Enter post content"
              rows={10}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              placeholder="Enter post category"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="imageUrl" className="text-sm font-medium">
              Image URL
            </label>
            <Input
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
              placeholder="Enter image URL"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Post"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
