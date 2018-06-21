import React from 'react'
import { findIndex } from 'lodash'

export default class CompareForm extends React.Component {
  constructor (props) {
    super(props)
  }
  handleChange (ev) {
    const { name, value } = ev.target
    switch (name) {
      case 'menu': this.props.onChangeMenu(this.props.menus[value]); break
      case 'value': this.props.onChangeValue(value); break;
    }
  }
  onSubmit (ev) {
    ev.preventDefault()
    this.props.onSubmit(this.props.menu, this.props.value)
  }
  getMenuIndex () {
    return findIndex(this.props.menus, (menu) => menu.key == this.props.menu.key)
  }
  render () {
    return (
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">menu</label>
          <div className="col-sm-10">
            <select
              className="form-control"
              name="menu"
              value={ this.getMenuIndex() }
              onChange={ (e) => this.handleChange(e) }>
              {(() => (
                this.props.menus.map((menu, index) => {
                  return <option key={ menu.key } value={ index }>{ menu.from } → { menu.to }</option>
                })
              ))()}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">value</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              name="value"
              type="number"
              value={ this.props.value }
              onChange={ (e) => this.handleChange(e) }
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 col-offset-sm-2">
            <button
            className="btn btn-primary"
            onClick={ (e) => this.onSubmit(e) }
          >compare</button>
          </div>
        </div>
      </form>
    )
  }
}