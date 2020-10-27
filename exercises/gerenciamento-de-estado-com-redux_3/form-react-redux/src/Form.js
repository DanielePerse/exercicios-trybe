import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from '../src/redux/actions';

class Form extends React.Component {

  render () {
    const { addAssignment, value } = this.props;
    return(
      <div>
        <h1>Form exemplo conteúdo 12.2</h1>
        <form>
          <fieldset>

          <div>
            <label>
              Está ok?
            <input name="isOk" type="checkbox" value={value.isOk} onChange={(event) => addAssignment(event.target.name, event.target.value)} required></input>
            </label>
          </div>

          </fieldset>

          <fieldset>

          <div>
            <label>
              Nota do conteúdo
            <input name="notaConteudo" type="number" value={value.notaConteudo} onChange={(event) => addAssignment(event.target.name, event.target.value)} required/>
            </label>
          </div>

          <div>
            <label>
              O que mais gostou
            <input name="maisGostou" type="text" value={value.maisGostou} onChange={(event) => addAssignment(event.target.name, event.target.value)} required />
            </label>
          </div>

          <div>
            <label>
              Assuntos que teve mais dificuldade
              <select name="assuntosDificieis" value={value.assuntosDificieis} onChange={(event) => addAssignment(event.target.name, event.target.value)} required >
                <option value="selecione">Selecione</option>
                <option value="props">Props</option>
                <option value="estado">Estado</option>
                <option value="react">React</option>
                <option value="componente">Componente</option>
              </select>
            </label>
          </div>

          </fieldset>
          <input type="submit" value="Submit"/> 
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { value: state.formReducer }
};

const mapDispatchToProps = (dispatch) => ({
  addAssignment: (name, value) => dispatch(addAssignment(name, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(Form);
