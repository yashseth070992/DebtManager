import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 50,
  },
  drawerItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logoutButton: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  scrollViewContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
  },
  chartTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  sliderContainer: {
    marginBottom: 15,
    paddingHorizontal: 10, // Add padding for better touchable area
    width: '100%',
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  slider: {
    width: '100%',
    height: 40, // Maintain height, but you can adjust if needed
  },
  googleButton: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: '#555',
  },
  signInLink: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});