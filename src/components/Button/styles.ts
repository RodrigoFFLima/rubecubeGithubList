import styled from 'styled-components/native';

const Container = styled.View({
    paddingBottom: 24,
    width: '100%',
})

export const StyledBtn = styled.TouchableOpacity({
    width: '100%',
    backgroundColor: "#5EB1BF",
    height: 48,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
});

export const StyledText = styled.Text({
    color: '#fff',
    fontSize: 18,

});

export default Container;