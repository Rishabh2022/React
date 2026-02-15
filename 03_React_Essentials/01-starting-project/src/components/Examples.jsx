import { useState } from 'react';

import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  //core concepts -props

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
        //this is printing the old values because till here the new App is not execute and we get the new values only when the new App execute after the state change 

    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    // using  the section making this secion reusable also sending the buttens as a props
    <Section title="Examples" id="examples">
      
      <Tabs
      // we can pass the buttons also from here either menu or ul or div in which we want list to render as of not we have hardcoded menu in tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>

            // <section id="examples">
            //   <h2>Examples</h2>
            //   <menu>
            //     {/* it will pass the handle select method point and tab button execute it on select */}
            //     {/* <TabButton onSelect={handleSelect}>Components</TabButton> */}
            //     <TabButton onSelect={() => handleSelect('components')}>
            //       Components
            //     </TabButton>
            //     <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            //     <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            //     <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            //   </menu>
            //   {/* <div id="tab-content">
            //     <h3>{EXAMPLES[selectedTopic].title}</h3>
            //     <p>{EXAMPLES[selectedTopic].description}</p>
            //     <pre>
            //       <code>{EXAMPLES[selectedTopic].code}</code>
            //     </pre>
            //   </div> */}
            //   {tabContent}
            // </section>
    
    
  );
}
