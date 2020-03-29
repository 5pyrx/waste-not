import React from 'react';

import style from './Form.module.css';

export default (props) => {
  const {
    cancel,
    submit,
    submitButtonText,
    elements
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  return (
    <div className={style.FormWrapper}>
      <form onSubmit={handleSubmit}>
        {elements()}
        <div className={style.FormButtons}>
          <button type="submit">{submitButtonText}</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
