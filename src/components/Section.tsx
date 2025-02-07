type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => (
    <section id={id} className='min-h-screen p-8 bg-grey-100 border-b-2'>
        <h2 className="text-3xl font-bold mb-4 text-blue-600">{title}</h2>
        <div>{children}</div>
    </section>
);

export default Section;