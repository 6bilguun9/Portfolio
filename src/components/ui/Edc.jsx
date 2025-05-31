import { EducationTimeLine } from "./EducationTimeLine";

function Edc() {
  return (
    <div className="flex ">
      <div className="relative pl-8">
        <div className="absolute top-0 left-2 h-full border-l-2 border-gray-700" />
        {EducationTimeLine.map((item) => (
          <div key={item.id} className="mb-12 relative">
            <a
              href={item.url || "#"}
              className="absolute -left-6 bg-neutral-900 rounded-full p-1 ring-4 ring-neutral-800 transform -translate-x-1/2"
            >
              <img
                src={item.logoUrl}
                alt={item.company}
                className="w-7 h-7 rounded-full object-cover object-center"
              />
            </a>

            <p className="text-sm text-gray-400">{item.date}</p>
            <h3 className="text-lg font-semibold text-white">{item.company}</h3>
            <p className="italic text-gray-300">{item.role}</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-300">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Edc;
