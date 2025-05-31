import ProStorage from "./ProStorage";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

export default function ProCards() {
  return (
    <div className="w-full flex flex-col gap-4">
      {ProStorage.map((item) => (
        <BentoGrid key={item.id}>
          <BentoCard
            name={item.name}
            description={item.description}
            Icon={item.icon}
            href={item.link}
            cta={item.cta || "View Project"}
            id={item.id}
            className="bg-neutral-900 text-neutral-950  transition-colors duration-300 flex justify-center"
            background={
              <div className="bg-neutral-900">
                <img
                  className="absolute inset-0 h-full w-full object-cover opacity-40 "
                  src={item.image}
                ></img>
                <div className="absolute bottom-16 left-6 right-6 flex flex-wrap gap-2 z-10">
                  {item.techStack &&
                    item.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded bg-neutral-300 text-neutral-950 border border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            }
          />
        </BentoGrid>
      ))}
    </div>
  );
}
