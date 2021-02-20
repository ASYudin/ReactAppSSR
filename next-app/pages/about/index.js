import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About() {
  const router = useRouter();
  return (
    <MainLayout title="About page">
      <h1>About Page</h1>
      <button onClick={() => router.push("posts")}>Go back to Posts</button>
    </MainLayout>
  );
}
