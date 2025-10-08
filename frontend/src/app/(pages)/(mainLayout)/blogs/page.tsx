import Image from "next/image";
import Link from "next/link";
import {blogs} from "@/assets/data/blogs";


export const metadata = {
    title: "Blogs | CoderTech",
    description: "We help businesses grow with modern software, web, and marketing solutions. Partner with CoderTech for your digital transformation.",
};


export default function BlogsPage() {
  return (
    <section className="py-2 sm:py-5">
      <div className="container">
        <div className="mt-4 grid sm:grid-cols-2 gap-10 md:grid-cols-3">
          <div className={"md:col-span-2 grid sm:grid-cols-2 gap-3"}>
              {
                  blogs?.map(blog=>(
                      <Link key={blog?._id} href={`/blog/${blog?.slug}`} className={"shadow bg-base-100"}>
                          <Image
                              src={blog?.thumbnail}
                              alt="web"
                              width={300}
                              height={200}
                              className={"w-full h-56 object-cover"}
                          />
                          <div className={"p-3 pb-6"}>
                              <p className={"text-xs text-neutral-content"}>
                                  {blog?.category}
                              </p>

                              <h2 className={"mt-2 text-xl font-medium text-neutral"}>
                                  {blog?.title}
                              </h2>

                              <p className={"mt-2 text-sm text-neutral-content"}>
                                  {blog?.shortDescription}
                              </p>
                          </div>
                      </Link>
                  ))
              }

          </div>

          <div>
            <h2 className={"text-xl font-semibold text-neutral"}>
              Popular Blogs
            </h2>
            <div className={"mt-4 flex flex-col gap-2"}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
