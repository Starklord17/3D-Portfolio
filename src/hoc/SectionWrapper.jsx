import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;

/* 
A higher-order component (HOC) is an advanced technique in React for reusing component logic [1][2]. It is a function that takes a component and returns a new component with extended or modified functionality [3][4]. HOCs can be used to abstract out common functionality and apply it to multiple components, reducing code duplication and simplifying maintenance. HOCs are not part of the React API but are a pattern that is widely used in the React ecosystem [1]. They can be used for things like handling authentication, data fetching, and styling. HOCs are one of several patterns in React for code reuse, with others including Render Props and Hooks.

1. Higher-Order Components React
https://reactjs.org/docs/higher-order-components.html
2. Higher-Order Components In React Smashing Magazine
https://www.smashingmagazine.com/2020/06/higher-order-components-react/
3. Understanding React higher-order components - LogRocket Blog
https://blog.logrocket.com/understanding-react-higher-order-components/
4. ReactJS Higher Order Components Tutorial
https://www.codingame.com/playgrounds/8595/reactjs-higher-order-components-tutorial
 */