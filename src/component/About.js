import React from 'react'

export default function About(props) {
  
  let Mystyle ={
    color : props.mode === 'dark' ? 'white' : 'black',
    backgroundColor : props.mode === 'dark' ? '#2d265a' : 'white'
  }
 
  return (
    <>
    <div className ="container" style={Mystyle}>
    <h1 style={{color : props.mode === 'dark' ? 'white' : 'black'}}>About Us</h1>
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" style={Mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={Mystyle} data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <strong>Accordion Item #1</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={Mystyle}>Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={Mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={Mystyle} data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Accordion Item #2</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={Mystyle}>Placeholder content for this accordion, which is intended to demonstrate the class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item"style={Mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <strong>Accordion Item #3</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={Mystyle}>Placeholder content for this accordion, which is intended to demonstrate the  class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
