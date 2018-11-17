import React from 'react'
import PropTypes from 'prop-types'

const Layout = (props) => {
  const {
    input,
    previews,
    submitButton,
    extra: { maxFiles, onSubmit },
    ...dropzoneProps
  } = props

  return (
    <div {...dropzoneProps}>
      {previews.length > 0 && previews}

      {previews.length < maxFiles && input}

      {previews.length > 0 && onSubmit && submitButton}
    </div>
  )
}

Layout.propTypes = {
  dropzoneProps: PropTypes.object.isRequired,
  input: PropTypes.node,
  previews: PropTypes.arrayOf(PropTypes.node).isRequired,
  submitButton: PropTypes.node,
  extra: PropTypes.object.isRequired,
  dropzoneRef: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
}

export default Layout
