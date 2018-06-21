import React from 'react'
import CompareForm from './CompareForm'

export default class Compare extends React.Component {
  constructor (props) {
    super(props)
    console.log('compare', props)
  }
  render () {
    return (
      <div>
        <div className="row">
          <div className="col">
            <CompareForm
              menus={ this.props.menus }
              menu={ this.props.menu }
              value={ this.props.value }
              onChangeMenu={ this.props.onChangeMenu }
              onChangeValue={ this.props.onChangeValue }
              onSubmit={ this.props.onSubmit }
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {(() => {
              return (
                this.props.result.process       ? <div>読み込み中</div> :
                this.props.result.price != null ? <div>{ this.props.result.price } { this.props.menu.to }</div> :
                this.props.result.error != null ? <div>{ this.props.result.error }</div> : null
              )
            })()}
          </div>
        </div>
      </div>
    )
  }
}
