import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Head extends PureComponent {
  render() {
    const { schema } = this.props
    return (
      <thead>
      <tr>
        {schema.map((col, colIndex) => (
          <th
            key={colIndex}
          >
            {col.title}
          </th>
        ))}
      </tr>
      </thead>
    )
  }
}

Head.propTypes = {
  schema: PropTypes.array.isRequired,
}

export default Head
