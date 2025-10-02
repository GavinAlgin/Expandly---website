import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Web Design",
    description: "Crafting beautiful, user-centric interfaces and layouts that are responsive and modern.",
  },
  {
    id: "02",
    title: "SEO Optimization & Marketing",
    description: "Improving search engine visibility and performance to drive organic traffic.",
  },
  {
    id: "03",
    title: "IT Technician",
    description: "Offering technical support, system maintenance, and IT infrastructure services.",
  },
  {
    id: "04",
    title: "Web & Mobile Development",
    description: "Building scalable web and mobile apps integrated digital marketing strategies.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-16 text-white">
      <h2 className="text-white text-4xl font-semibold text-center mb-[8rem]">
        What you can get out of us
      </h2>

      {/* Removed Aura Background */}

      {/* Services Content */}
      <div className="space-y-16 max-w-8xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-10">
            <h2 className="text-6xl font-bold text-[#196be4] mb-4 sm:mb-0 w-full sm:w-1/6">
              {service.id}
            </h2>
            <div className="w-full sm:w-5/6">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-[#888888] mt-2 max-w-3xl">{service.description}</p>
              <a href="/readmore" className="mt-2 hover:text-[#196be4] text-white">Readmore</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
