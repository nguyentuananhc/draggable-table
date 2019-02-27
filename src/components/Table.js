import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const item = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  age: 20,
  address: 'Viet Nam'
}

const data = [...Array(10)].map((it, index) => ({ id: index + 1, ...item }))

const schema = [
  {
    key: 'id',
    title: '#',
    width: '5%',
  },
  {
    key: 'firstName',
    title: 'Firstname',
    width: '15%',
  },
  {
    key: 'lastName',
    title: 'Last Name',
    width: '15%',
    render: (text) => <div onClick={() => alert(text)}>{text}</div>
  },
  {
    key: 'email',
    title: 'Email',
    width: '15%',
  },
  {
    key: 'age',
    title: 'Age',
    width: '15%',
  },
  {
    key: 'address',
    title: 'Address',
    width: '15%',
  },
]

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

class Table extends PureComponent {
  constructor(props) {
    super(props)
    const { schema, data } = this.props
    this.state = {
      schema,
      data,
    }
  }

  onDragEnd = (result) => {
    if (!result.destination) {
      return
    }
    const schema = reorder(
      this.state.schema,
      result.source.index,
      result.destination.index
    )

    this.setState({
      schema,
    })
  }


  renderHead = () => {
    const { schema } = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (

            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="row"

            >
              {schema.map((col, colIndex) => (
                <div key={colIndex} className="column" style={{ width: col.width }}>
                  <Draggable draggableId={col.key} index={colIndex}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {col.title}
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }

  onRowDragEnd = (result) => {
    console.log(result)
    if (!result.destination) {
      return
    }
    const data = reorder(
      this.state.data,
      result.source.index,
      result.destination.index
    )

    this.setState({
      data,
    })
  }

  renderBody = () => {
    const { data, schema } = this.state
    return (
      <DragDropContext onDragEnd={this.onRowDragEnd}>
        <Droppable droppableId="droppableRow">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {data.map((item, rowIndex) => (
                <Draggable key={rowIndex} draggableId={item.id} index={rowIndex}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={rowIndex}
                      className="row"
                    >
                      {schema.map((col, colIndex) => (
                        <div
                          style={{ width: col.width }}
                          key={colIndex}
                             className="column"
                        >
                          {col.render && typeof col.render === 'function' ? col.render(item[col.key]) :item[col.key]}
                        </div>
                      ))}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
    return (
      <tbody>
      {data.map((item, rowIndex) => (
        <tr key={rowIndex}>
          {schema.map((col, colIndex) => (
            <td key={colIndex}>
              {col.render && typeof col.render === 'function' ? col.render(item[col.key], item) : item[col.key]}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    )
  }

  render() {
    return (
      <div className="table">
        {this.renderHead()}

        {this.renderBody()}
      </div>
    )
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  schema: PropTypes.array.isRequired,
}

Table.defaultProps = {
  data,
  schema,
}

export default Table
