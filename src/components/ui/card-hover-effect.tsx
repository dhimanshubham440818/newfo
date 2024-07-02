'use client'
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {/* <div className="bc ek/2 wm/4 df">
              <div className="oe dj ri wh of lf ud e z od sg di ma">
                <div className="fa kc xb eb td pe mb id kd kh fj gj">
                  <svg width="30" height="30" viewBox="0 0 30 30" className="ye"> 
                    <path
                      d="M16.6667 0V13.3333H30V0H16.6667ZM0 30H13.3333V16.6667H0V30ZM0 0V13.3333H13.3333V0H0ZM16.6667 21.6667H21.6667V16.6667H25V21.6667H30V25H25V30H21.6667V25H16.6667V21.6667Z" />
                  </svg>
                </div>
                <h3 className="dh jh zg yj km 2xl:ud-text-2xl hj ua">Prototype</h3>
                <p className="eh lh hj ih vg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.
                </p>
                <div>
                  <span className="d f q nn">
                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white" />
                      <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
                    </svg>
                  </span>
                  <span className="d t u nn">
                    <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white" />
                      <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white" />
                      <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white" />
                      <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white" />
                      <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white" />
                      <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white" />
                      <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white" />
                      <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white" />
                      <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white" />
                      <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white" />
                      <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white" />
                      <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white" />
                    </svg>
                  </span>
                </div>
              </div>
            </div> */}
            {/* <CardTitle>
              {item.title}
            </CardTitle> */}
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full  overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("dh jh zg yj km 2xl:ud-text-2xl hj ua", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="oe dj ri wh of lf ud e z od sg di ma">
        <div className="fa kc xb eb td pe mb id kd kh fj gj">
          <svg width="30" height="30" viewBox="0 0 30 30" className="ye">
            <path
              d="M16.6667 0V13.3333H30V0H16.6667ZM0 30H13.3333V16.6667H0V30ZM0 0V13.3333H13.3333V0H0ZM16.6667 21.6667H21.6667V16.6667H25V21.6667H30V25H25V30H21.6667V25H16.6667V21.6667Z" />
          </svg>
        </div>
        <h3 className="dh jh zg yj km 2xl:ud-text-2xl hj ua">Prototype</h3>
        <p className="eh lh hj ih vg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.
        </p>
        <div>
          <span className="d f q nn">
            <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white" />
              <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
            </svg>
          </span>
          <span className="d t u nn">
            <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white" />
              <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white" />
              <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white" />
              <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white" />
              <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white" />
              <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white" />
              <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white" />
              <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white" />
              <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white" />
              <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white" />
              <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white" />
              <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};
