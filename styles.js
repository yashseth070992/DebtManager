import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // light grey background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // dark grey text
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc', // light grey border
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff', // white input background
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF', // blue button
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 16,
    color: '#333',
  },
  signUpLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});