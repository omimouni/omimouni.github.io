import { sanityClient, UrlFor, VideoUrlFor } from "@/lib/sanity";
import urlBuilder from "@sanity/image-url";
import { PortableText, SanityDocument } from "next-sanity";

const QUERY = `*[_type == "work"]{slug}  `;
export async function generateStaticParams({ params }: any) {
    const works = await sanityClient.fetch(QUERY);
    return works.map((work: SanityDocument) => ({ slug: work.slug.current }));
}

const FIND_QUERY = `*[_type == "work" && slug.current == $slug][0]`;
export default async function WorkPage({ params }: { params: { slug: string } }) {
    const work = await sanityClient.fetch(FIND_QUERY, { slug: params.slug });

    // if (!work) {
    //     redirect("/works");
    // }

    const myPortableTextComponents = {
        types: {
            image: ({ value, isInline }: any) => <img src={urlBuilder({
                projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
                dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
            }).image(value).width(isInline ? 100 : 800).fit('max').auto('format').url()} />
        },
    }
    return <div className="py-32">
        <div className="wrapper !max-w-screen-md">
            <h1 className="text-5xl font-black uppercase">{work.title}</h1>
            <div className="flex gap-10 mt-4">
                <div className="w-full">
                        {work.video && <video src={VideoUrlFor(work.video)!} autoPlay loop muted playsInline />}
                </div>
                <div className="w-full">
                    <div className="flex gap-2">
                        {work.tags?.map((tag: string) => (
                            <div key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded-md">{tag}</div>
                        ))}
                        {
                            work.createdAt && <div className="text-xs bg-gray-200 px-2 py-1 rounded-md">{new Date(work.createdAt).toLocaleDateString()}</div>
                        }
                    </div>
                </div>
            </div>

            <div id="content" className="prose max-w-none mt-10">
                <PortableText value={work.content} components={myPortableTextComponents} />
            </div>
        </div>
    </div>;
}

