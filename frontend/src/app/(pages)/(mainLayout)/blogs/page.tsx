import Image from "next/image";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <section className="py-2 sm:py-5">
      <div className="container">
        <div className="mt-4 grid sm:grid-cols-2 gap-10 md:grid-cols-3">
          <div className={"md:col-span-2 grid sm:grid-cols-2 gap-3"}>
            <div className={"shadow bg-base-100"}>
              <Image
                src=""
                alt=""
                width={300}
                height={200}
                className={"w-full h-56 object-cover"}
              />
              <div className={"p-3 pb-6"}>
                <p className={"text-xs text-neutral-content"}>
                  Digital Marketing
                </p>

                <h2 className={"mt-2 text-xl font-medium text-neutral"}>
                  The Best Digital Marketing Agency in Bangladesh
                </h2>

                <p className={"mt-2 text-sm text-neutral-content"}>
                  Have you ever tried to run an online business in Bangladesh?
                  Maybe you have faced these challenges-getting a good ranking
                  on Google feel like you are climbing Mount Everest
                </p>
              </div>
            </div>
            <div className={"shadow bg-base-100"}>
              <Image
                src=""
                alt=""
                width={300}
                height={200}
                className={"w-full h-56 object-cover"}
              />
              <div className={"p-3 pb-6"}>
                <p className={"text-xs text-neutral-content"}>
                  Digital Marketing
                </p>

                <h2 className={"mt-2 text-xl font-medium text-neutral"}>
                  The Best Digital Marketing Agency in Bangladesh
                </h2>

                <p className={"mt-2 text-sm text-neutral-content"}>
                  Have you ever tried to run an online business in Bangladesh?
                  Maybe you have faced these challenges-getting a good ranking
                  on Google feel like you are climbing Mount Everest
                </p>
              </div>
            </div>
            <div className={"shadow bg-base-100"}>
              <Image
                src=""
                alt=""
                width={300}
                height={200}
                className={"w-full h-56 object-cover"}
              />
              <div className={"p-3 pb-6"}>
                <p className={"text-xs text-neutral-content"}>
                  Digital Marketing
                </p>

                <h2 className={"mt-2 text-xl font-medium text-neutral"}>
                  The Best Digital Marketing Agency in Bangladesh
                </h2>

                <p className={"mt-2 text-sm text-neutral-content"}>
                  Have you ever tried to run an online business in Bangladesh?
                  Maybe you have faced these challenges-getting a good ranking
                  on Google feel like you are climbing Mount Everest
                </p>
              </div>
            </div>
            <div className={"shadow bg-base-100"}>
              <Image
                src=""
                alt=""
                width={300}
                height={200}
                className={"w-full h-56 object-cover"}
              />
              <div className={"p-3 pb-6"}>
                <p className={"text-xs text-neutral-content"}>
                  Digital Marketing
                </p>

                <h2 className={"mt-2 text-xl font-medium text-neutral"}>
                  The Best Digital Marketing Agency in Bangladesh
                </h2>

                <p className={"mt-2 text-sm text-neutral-content"}>
                  Have you ever tried to run an online business in Bangladesh?
                  Maybe you have faced these challenges-getting a good ranking
                  on Google feel like you are climbing Mount Everest
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className={"text-xl font-semibold text-neutral"}>
              Popular Blogs
            </h2>
            <div className={"mt-4 flex flex-col gap-2"}>
              <Link
                href={""}
                className={
                  "flex items-center gap-2 bg-base-100 hover:shadow p-2 rounded duration-300"
                }
              >
                <Image
                  src=""
                  alt=""
                  width={100}
                  height={100}
                  className={"w-12 h-12 rounded-full"}
                />
                <div>
                  <p className={"text-xs text-neutral-content"}>
                    Web Development
                  </p>
                  <h2 className={"font-semibold text-neutral"}>
                    The Best Digital Marketing Agency in Bangladesh
                  </h2>
                </div>
              </Link>

              <Link
                href={""}
                className={
                  "flex items-center gap-2 bg-base-100 hover:shadow p-2 rounded duration-300"
                }
              >
                <Image
                  src=""
                  alt=""
                  width={100}
                  height={100}
                  className={"w-12 h-12 rounded-full"}
                />
                <div>
                  <p className={"text-xs text-neutral-content"}>
                    Web Development
                  </p>
                  <h2 className={"font-semibold text-neutral"}>
                    The Best Digital Marketing Agency in Bangladesh
                  </h2>
                </div>
              </Link>

              <Link
                href={""}
                className={
                  "flex items-center gap-2 bg-base-100 hover:shadow p-2 rounded duration-300"
                }
              >
                <Image
                  src=""
                  alt=""
                  width={100}
                  height={100}
                  className={"w-12 h-12 rounded-full"}
                />
                <div>
                  <p className={"text-xs text-neutral-content"}>
                    Web Development
                  </p>
                  <h2 className={"font-semibold text-neutral"}>
                    The Best Digital Marketing Agency in Bangladesh
                  </h2>
                </div>
              </Link>

              <Link
                href={""}
                className={
                  "flex items-center gap-2 bg-base-100 hover:shadow p-2 rounded duration-300"
                }
              >
                <Image
                  src=""
                  alt=""
                  width={100}
                  height={100}
                  className={"w-12 h-12 rounded-full"}
                />
                <div>
                  <p className={"text-xs text-neutral-content"}>
                    Web Development
                  </p>
                  <h2 className={"font-semibold text-neutral"}>
                    The Best Digital Marketing Agency in Bangladesh
                  </h2>
                </div>
              </Link>

              <Link
                href={""}
                className={
                  "flex items-center gap-2 bg-base-100 hover:shadow p-2 rounded duration-300"
                }
              >
                <Image
                  src=""
                  alt=""
                  width={100}
                  height={100}
                  className={"w-12 h-12 rounded-full"}
                />
                <div>
                  <p className={"text-xs text-neutral-content"}>
                    Web Development
                  </p>
                  <h2 className={"font-semibold text-neutral"}>
                    The Best Digital Marketing Agency in Bangladesh
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
