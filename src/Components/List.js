import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../Styles';

export default class List extends Component {
  Concl() {
    if (this.props.concl == 0) {
      return (
        <TouchableOpacity
          style={{
            padding: 5,
            marginRight: 35,
            borderRadius: 5,
            textAlign: 'center',
            backgroundColor: '#ff8300',
          }}
          onPress={() => this.props.atualizar(this.props.id)}>
          <Text style={{color: 'white'}}>Concluido</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            padding: 5,
            marginRight: 35,
            borderRadius: 5,
            textAlign: 'center',
            backgroundColor: 'green',
          }}
          onPress={() => this.props.atualizar(this.props.id)}>
          <Text style={{color: 'white'}}>Concluido</Text>
        </TouchableOpacity>
      );
    }
  }

  Data() {
    const data = new Date().toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    console.log(data);

    if (data > this.props.data) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 40,
            backgroundColor: 'red',
            paddingBottom: 10,
            paddingTop: 10,
          }}>
          <Text style={{color: 'white'}}>Descrição: {this.props.desc}</Text>
          <Text style={{color: 'white'}}>Prioridade: {this.props.prior}</Text>
          <Text style={{color: 'white'}}>
            Data de Inclusão: {this.props.data}
          </Text>

          <View style={styles.ViewListBtt}>
            <TouchableOpacity
              style={styles.ListBttRe}
              onPress={() => this.props.remover(this.props.id)}>
              <Text style={{color: 'white'}}>Remover</Text>
            </TouchableOpacity>
            {this.Concl()}
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.containerList}>
          <Text>Descrição: {this.props.desc}</Text>
          <Text>Prioridade: {this.props.prior}</Text>
          <Text>Data de Inclusão: {this.props.data}</Text>
          <View style={styles.ViewListBtt}>
            <TouchableOpacity
              style={styles.ListBttRe}
              onPress={() => this.props.remover(this.props.id)}>
              <Text style={{color: 'white'}}>Remover</Text>
            </TouchableOpacity>
            {this.Concl()}
          </View>
        </View>
      );
    }
  }

  render() {
    return <View>{this.Data()}</View>;
  }
}
