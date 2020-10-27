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
            <input name="isOk" type="checkbox" required value={value.isOk} onChange={({ target }) => addAssignment(target.name, target.value)}></input>
            </label>
          </div>

          </fieldset>

          <fieldset>

          <div>
            <label>
              Nota do conteúdo
            <input name="notaConteudo" type="number" value={value.notaConteudo} onChange={({ target }) => addAssignment(target.name, target.value)} required/>
            </label>
          </div>

          <div>
            <label>
              O que mais gostou
            <input name="maisGostou" type="text" value={value.maisGostou} onChange={({ target }) => addAssignment(target.name, target.value)} required />
            </label>
          </div>

          <div>
            <label>
              Assuntos que teve mais dificuldade
              <select name="assuntosDificieis" value={value.assuntosDificieis} onChange={({ target }) => addAssignment(target.name, target.value)} required >
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
