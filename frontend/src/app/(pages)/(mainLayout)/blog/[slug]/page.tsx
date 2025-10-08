import Image from "next/image";
import { blogs } from "@/assets/data/blogs";
import parser from "html-react-parser";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const targetedBlog = blogs?.find((blog) => blog.slug == slug);
  const plainDescription = targetedBlog?.description
    ? parser(targetedBlog?.description)
    : "";

  if (!targetedBlog) return null;

  return (
    <section className={"py-5"}>
      <div className="container">
        <div className={"grid md:grid-cols-3 gap-10"}>
          <div className={"md:col-span-2"}>
            <Image
              src={targetedBlog?.thumbnail}
              alt={targetedBlog?.slug}
              width={500}
              height={230}
              className={"w-full"}
            />
            <div className={"mt-4 text-xs flex justify-between items-center"}>
              <p className={"text-neutral-content"}>{targetedBlog?.category}</p>
              {/*<div className={"flex items-center gap-2"}>Share:</div>*/}
            </div>

            <h2 className={"mt-4 text-3xl font-bold text-neutral"}>
              {targetedBlog?.title}
            </h2>

            <div className={"mt-4 text-[15px] text-neutral-content"}>
              {plainDescription}
            </div>
          </div>
          <div>
            <h2 className={"text-xl font-semibold text-neutral"}>
              Related Blogs
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const targetedBlog = blogs?.find((blog) => blog.slug === slug);

  if (!targetedBlog) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  return {
    title: targetedBlog.title,
    description: targetedBlog.shortDescription,
    openGraph: {
      title: targetedBlog.title,
      description: targetedBlog.shortDescription,
      images: [
        {
          url: targetedBlog.thumbnail,
          width: 800,
          height: 600,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: targetedBlog.title,
      description: targetedBlog.shortDescription,
      images: [targetedBlog.thumbnail],
    },
  };
}
