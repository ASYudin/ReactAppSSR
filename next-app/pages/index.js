import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function index() {
  return (
    <MainLayout title={'Home page'}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
    </MainLayout>
  );
}