import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

class Test extends React.Component {

  render() {
    return (
      <div className="grid">
        <span><strong>Id</strong></span>
        <span><strong>Full Name</strong></span>
        <span><strong>Country</strong></span>
        <span><strong>Created at</strong></span>
        <span><strong>Email</strong></span>
        <span>0</span>
        <span>Aaron Kris</span>
        <span>Philippines</span>
        <span>1991-05-23T14:19:51</span>
        <span>Ophelia_Mitchell@karley.name</span>
        <span>1</span>
        <span>Simeon McLaughlin</span>
        <span>Singapore</span>
        <span>2012-03-07T00:08:36</span>
        <span>Sabrina_Barton@torey.net Sabrina_Barton@torey.net Sabrina_Barton@torey.net Sabrina_Barton@torey.net Sabrina_Barton@torey.net Sabrina_Barton@torey.net Sabrina_Barton@torey.net</span>
        <span>2</span>
        <span>Kelsie Shanahan</span>
        <span>Brazil</span>
        <span>1985-03-10T20:13:04</span>
        <span>Karianne@salvatore.biz</span>
      </div>
    )
  }
}

export default Test
