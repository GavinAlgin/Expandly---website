import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Web Design",
    description: "Crafting beautiful, user-centric interfaces and layouts that are responsive and modern.",
  },
  {
    id: "02",
    title: "SEO Optimization",
    description: "Improving search engine visibility and performance to drive organic traffic.",
  },
  {
    id: "03",
    title: "IT Technician",
    description: "Offering technical support, system maintenance, and IT infrastructure services.",
  },
  {
    id: "04",
    title: "Web Development & Marketing",
    description: "Building scalable web apps and integrated digital marketing strategies.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-16 bg-black text-white">
      <h2 className="text-white text-4xl font-semibold text-center mb-[8rem]">What you can get out of us</h2>

      {/* Background Aura Gradient Waves */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[150%] h-[150%] -translate-x-1/2 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 opacity-30 blur-3xl animate-pulse rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 opacity-20 blur-2xl animate-pulse delay-1000 rounded-full" />
        <div className="absolute top-1/3 left-0 w-2/3 h-2/3 bg-gradient-to-tl from-blue-300 via-blue-500 to-blue-700 opacity-20 blur-2xl animate-pulse delay-2000 rounded-full" />
      </div>

      {/* Services Content */}
      <div className="space-y-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-700 pb-10">
            <h2 className="text-6xl font-bold text-blue-400 mb-4 sm:mb-0 w-full sm:w-1/6">
              {service.id}
            </h2>
            <div className="w-full sm:w-5/6">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-300 mt-2 max-w-3xl">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
