import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const AccordionItem = ({ title, content, isExpanded, onToggle }) => {
  const cardVariants = {
    collapsed: {
      height: "60px",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    expanded: {
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const contentVariants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };

  const chevronVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <motion.div
      className={`w-2/3 m-auto dark:bg-gray-800' my-4 h-full cursor-pointer select-none overflow-hidden rounded-lg border  dark:border-gray-700`}
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-4 text-gray-900">
        <h2 className="m-0 text-sm font-semibold text-primary">{title}</h2>
        <motion.div variants={chevronVariants}>
          <ChevronDown size={18} />
        </motion.div>
      </div>
      <motion.div
        className="text-md select-none px-4 py-4"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <p className="m-0 text-sm text-primary-dark">{content}</p>
      </motion.div>
    </motion.div>
  );
};

export const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      <h3 className="m-auto w-fit capitalize mb-8">
        Frequently Asked questions
      </h3>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
