import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

import ItemDatabase from '../Database/crud_rn';
import List from './List';

import {styles} from '../Styles/index';
import Tarefa from '../Database/Tarefa';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: '',
      prior: '',
      data: '',
      lista: [],
      botao: 'Marcar como feito',
    };
  }

  Inserir = (desc, prior, data) => {
    try {
      const banco = new ItemDatabase();
      const tarefa = new Tarefa(desc, prior, data);
      banco.Inserir(tarefa);
      this.Listar();
      alert('Tarefa Adicionada!');
    } catch {
      alert('Houve um erro ao adicionar sua tarefa.');
    }
  };

  componentDidMount() {
    this.Listar();
  }

  Listar = () => {
    const banco = new ItemDatabase();
    banco.Listar().then(lista => {
      this.setState({lista: lista});
    });
  };

  Remover = (id) => {
    const banco = new ItemDatabase();
    banco.Remover(id);
    alert('Tarefa Removida!');
    this.Listar();
  };

  Atualizar = (id) => {
    const banco = new ItemDatabase();
    banco.Atualizar(id);
    alert('Tarefa Feita!');
    this.Listar();
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            onChangeText={val => {
              this.setState({desc: val});
            }}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Prioridade"
            onChangeText={val => {
              this.setState({prior: val});
            }}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Data de Término - (DD/MM/YYYY)"
            onChangeText={val => {
              this.setState({data: val});
            }}></TextInput>

          <TouchableOpacity
            onPress={() =>
              this.Inserir(this.state.desc, this.state.prior, this.state.data)
            }
            style={styles.botao}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Adicionar Tarefa
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 20,
              fontSize: 24,
              color: 'black',
            }}>
            Lista de Tarefas
          </Text>
          <FlatList
            data={this.state.lista}
            renderItem={({item}) => (
              <List
                id={item.id}
                concl={item.concl}
                desc={item.desc}
                prior={item.prior}
                data={item.data}
                remover={this.Remover}
                atualizar={this.Atualizar}
              />
            )}
          />
        </View>
      </ScrollView>
    );
  }
}
