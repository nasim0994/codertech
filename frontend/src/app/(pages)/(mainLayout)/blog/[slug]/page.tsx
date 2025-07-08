import Image from "next/image";
import Link from "next/link";

export default function BlogDetailsPage() {
  return (
    <section className={"py-5"}>
      <div className="container">
        <div className={"grid md:grid-cols-3 gap-10"}>
          <div className={"md:col-span-2"}>
            <Image
              src=""
              alt=""
              width={500}
              height={230}
              className={"w-full"}
            />
            <div className={"mt-4 text-xs flex justify-between items-center"}>
              <p className={"text-neutral-content"}>Digital Marketing</p>
              <div className={"flex items-center gap-2"}>Share:</div>
            </div>

            <h2 className={"mt-4 text-3xl font-bold text-neutral"}>
              Is Youtube Considered Social Media? A Complete Breakdown
            </h2>

            <div className={"mt-4 text-[15px] text-neutral-content"}>
              <p>
                Does this question ever arise in your mind? Is youtube a social
                media? We have all seen dog clips,makeup tutorials or latest tv
                series on Youtube. Just give a pause, youtube is more than just
                a platform for passive video viewing. It boasts features which
                blur the lines with social media, like commenting,liking and
                subscribing to channels. Let's dive into the trending question:
                does youtube really want its spot in the bustling world of
                social media? There is no clear cut answer.
              </p>
              <p className={"mt-2"}>
                What Is Social Media, Anyway? Before we start a conversation, is
                Youtube a social media or not? We have a question for you: Do
                you know What social media is? Basically Social media platforms
                are websites or apps which are made to help people to create and
                share content they have made themselves. It allows users to
                build bonds with one another,share their ideas,photos,videos and
                of course indulge in some funny memes.
              </p>
              <p className={"mt-2"}>
                Facebook,Instagram,Twitter and TikTok are platfrom which really
                help to build interaction among users. For example, if you like
                someone's post obviously you can share that post to your feed.
                It is all about making connections and creating a sense of
                community.
              </p>
            </div>
          </div>
          <div>
            <h2 className={"text-xl font-semibold text-neutral"}>
              Related Blogs
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
