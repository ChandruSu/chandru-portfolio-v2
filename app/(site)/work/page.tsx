import Image from "next/image";

export default function Work() {
  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[40rem] grow flex-col gap-10 pb-16 font-light">
        <h3 className="text-xl font-medium">Background</h3>

        <div className="grid grid-cols-[8rem_auto] gap-8 max-sm:grid-cols-1 max-sm:justify-items-center">
          <a href="https://www.kcl.ac.uk/">
            <Image
              src="/kcl_square.png"
              width="200"
              height="200"
              alt="kcl"
              className="max-w-[8rem]"
            />
          </a>
          <div className="flex w-full flex-col gap-4">
            <p>Bachelors of Science with Honors, in Computer Science with Year in Industry</p>
            <p className="text-right text-zinc-500">2021 - Present</p>
          </div>
        </div>

        <div className="grid grid-cols-[8rem_auto] gap-8 max-sm:grid-cols-1 max-sm:justify-items-center">
          <a href="https://tryterra.co">
            <Image src="/terra.jpg" width="200" height="200" alt="terra" className="max-w-[8rem]" />
          </a>
          <div className="flex w-full flex-col gap-4">
            <p>Terra (YC W21), Full-stack engineer</p>
            <ul className="ml-5 list-disc">
              <li>
                <p>
                  Product lead for developer dashboard, implementing payment infrastructure and
                  product analytics
                </p>
              </li>
              <li>
                <p>Customer success agent managing client growth</p>
              </li>
              <li>
                <p>API development and integrations</p>
              </li>
            </ul>
            <p className="text-right text-zinc-500">July 2023 - July 2024</p>
          </div>
        </div>

        <h3 className="text-xl font-medium">Projects</h3>
        <p>TBD...</p>
      </div>
    </div>
  );
}
