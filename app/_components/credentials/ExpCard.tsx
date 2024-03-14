// "use client";

interface ExpCardProps {
  workplace: string;
  role: string;
  date: string;
  description: string;
}

const ExpCard: React.FC<ExpCardProps> = ({
  workplace,
  role,
  date,
  description,
}) => {
  return (
    <div className="flex flex-row w-2/3 m-auto my-6 border rounded-md shadow-xl border-neutral-950 bg-neutral-500">
      <div className="flex flex-col flex-wrap w-full m-4">
        <p className="my-2 text-5xl">{workplace}</p>
        <p className="my-2 text-4xl">{role}</p>
        <p className="my-2 text-2xl">{date}</p>
        <p className="my-2 text-2xl">{description}</p>
      </div>
    </div>
  );
};

export default ExpCard;
