import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";
import Header from "../Header";
import Button from "../components/Button";
import styles from "./styles";
import { Content, Form } from "native-base";
import api_send_email from "../../services/api_send_email/api_send_mail";
import Loading from "../components/Loading";

import config from "../../utils/Config";

export default class Contact extends Component {
  
  static navigationOptions = {
    header: null
  }

  state = {
    de: "",
    to: config.email,
    subject: "",
    messages: "",
    validated: true,
    loading: false,
    isFocused: false
  };

  validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ from: text, validated: false });
      return false;
    } else {
      this.setState({ from: text, validated: true });
    }
  };

  sending = async () => {
    try {
      const { de, to, subject, messages, loading, validated } = this.state;

      if (de === null || de === "") {
        alert("Campo email deve ser preenchido!");
      } else if (messages === null || messages === "") {
        alert("Campo mensagem deve ser preenchido!");
      } else if (subject === null || subject === "") {
        alert("Campo assunto deve ser preenchido!");
      } else if (validated !== true) {
        alert("Campo email está inválido!");
      } else {
        if (loading) return;

        this.setState({ loading: true });
        const barra = "\n";

        const response = await api_send_email.post(`/testsend?`, {
          From: de,
          To: to,
          Judul: subject,
          Isi: messages + barra + de
        });

        alert(response.data);

        this.setState({ loading: false });

        this.setState({
          de: "",
          to: config.email,
          subject: "",
          messages: "",
          validated: true,
          isFocused: false
        });
      }
    } catch (err) {
      this.setState({ loading: false });
      if (err.data === undefined) {
        alert("Não foi possível enviar o email!!!!!!!, tente novamente!");
      } else {
        alert(err.data);
      }
    }
  };

  handleInputFocus = () => this.setState({ isFocused: true });
  handleInputBlur = () => this.setState({ isFocused: false });

  setAssuntoText(e) {
    let textAssunto = e.nativeEvent.text;
    this.setState({ subject: textAssunto });
  }

  setMensagemText(e) {
    let textMensagem = e.nativeEvent.text;
    this.setState({ messages: textMensagem });
  }

  setEmailText(e) {
    let textBusca = e.nativeEvent.text;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(textBusca) === false) {
      this.setState({ de: textBusca, validated: false });
      return false;
    } else {
      this.setState({ de: textBusca, validated: true });
    }
  }

  render() {
    const constanteOfertas = "enviando email";
    const nomeTitle = "Contato";
    const { isFocused, validated } = this.state;
   
    const { email } = config;

    return (
      <View style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
        <Header
          title={nomeTitle}
          style={styles.firstButton}
          navigation={() => this.props.navigation.goBack()}
        />

        {this.state.loading ? (
          <Loading style={styles.distanciaTop} title={constanteOfertas} />
        ) : (
          <View style={styles.container}>
            <Content>
              <Form>
                <View>
                  <View style={styles.viewText}>
                    <TextInput
                      onChange={this.setEmailText.bind(this)}
                      placeholder="Email ..."
                      placeholderTextColor={"#C0C0C0"}
                      onFocus={this.handleInputFocus}
                      onBlur={this.handleInputBlur}
                      style={styles.styleInput}
                    />

                    {isFocused === true && validated === false ? (
                      <Text style={styles.error}>Email incorreto !</Text>
                    ) : null}
                  </View>
                  <View style={styles.viewText}>
                    <TextInput
                      style={styles.styleInput}
                      placeholder="Assunto ..."
                      onChange={this.setAssuntoText.bind(this)}
                    />
                  </View>
                  <View style={styles.viewText}>
                    <TextInput
                      style={[styles.textAreaContainer]}
                      placeholder="Mensagem ..."
                      multiline={true}
                      maxLength={200}
                      onChange={this.setMensagemText.bind(this)}
                    />
                  </View>
                  <View style={styles.viewText}>
                    <Button
                      block
                      onPress={() => {
                        this.sending();
                      }}
                    >
                      Enviar
                    </Button>
                  </View>
                </View>
              </Form>

              <Text style={{ textAlign: "center", fontSize: 10 }}>
                {"\n"}
                Email de contato
              </Text>
              <Text style={{ textAlign: "center", fontSize: 10 }}>{email}</Text>
            </Content>
          </View>
        )}
      </View>
    );
  }
}
