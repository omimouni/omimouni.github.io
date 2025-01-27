import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Work({ params }: any) {
    const { slug } = params;
    const dir = path.join(process.cwd(), 'works');
    const filePath = path.join(dir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);


    return <div className="wrapper">
        <Link href="/works" className='inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm'>
            <FontAwesomeIcon icon={faArrowLeft} className="w-3.5 h-3.5" />
            Back to works
        </Link>
        <h1 className="text-3xl font-black">{data.title}</h1>
        <div className='mt-10 mb-8'>
            <div className='bg-gray-50 rounded-md overflow-hidden'>
                <video src={data.thumbnail} className="aspect-video h-auto w-full" autoPlay loop muted playsInline />
            </div>
            <div className='mt-8'>
                <p className='text-gray-600'>{data.description}</p>
                <div className='flex flex-wrap mt-4 gap-2'>
                    {
                        data.tags.map((tag) => (
                            <span className='py-1 px-3 text-xs bg-gray-100 rounded-full' key={tag}>{tag}</span>
                        ))
                    }
                </div>
            </div>
            <div className='prose mt-8' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </div>
}

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), 'works');
    const files = fs.readdirSync(dir);
    const works = files.map((file) => {
        const filePath = path.join(dir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        return data;
    });

    return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: any) {
    const { slug } = params;
    const dir = path.join(process.cwd(), 'works');
    const filePath = path.join(dir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
        title: data.title + ' | Oumar Mimouni | Full Stack Software Engineer',
        description: data.description,
    }
}