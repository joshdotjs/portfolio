import { useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// ==============================================

const PageTransisions = ({ children, route }) => {

  // --------------------------------------------

  const ref = useRef(null);

  // --------------------------------------------

  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={route} classNames='page' timeout={1000}>
          <div ref={ref}>
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>

      <div className='wipe' />
    </>
  );

  // --------------------------------------------
};

// ==============================================

export default PageTransisions;
