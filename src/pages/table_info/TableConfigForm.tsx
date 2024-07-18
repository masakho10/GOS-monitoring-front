import React, { useState } from 'react';
import { Flex, View, TextField, Button, Image } from "@aws-amplify/ui-react";
import Logo from './one_erp_logo.jpg'; // Assurez-vous que l'image se trouve dans le même dossier

interface TableConfigFormProps {
  onSubmit: () => void;
}

const TableConfigForm: React.FC<TableConfigFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    table: '',
    column: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('http://localhost:3333/api/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        onSubmit(); // Notify parent component and navigate to Dashboard
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Erreur lors de la mise à jour de la configuration');
      });
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"  // Aligner le contenu en haut de la page
      height="100vh"
      padding="2rem"
      backgroundColor="var(--amplify-colors-background-primary)"
    >
      <Image 
        src={Logo} 
        alt="Logo" 
        style={{ 
          width: '200px',  // Ajuster la largeur selon vos besoins
          marginBottom: '1rem', 
          display: 'block', 
          margin: '0 auto' 
        }} 
      />
      <View
        padding="2rem"
        backgroundColor="var(--amplify-colors-background-secondary)"
        borderRadius="8px"
        boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
        marginBottom="2rem"
      >
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="1rem">
            <TextField
              label="Nom de la table des logs"
              id="table"
              name="table"
              value={formData.table}
              onChange={handleChange}
              required
            />
            <TextField
              label="Nom de la colonne pour l'état des logs"
              id="column"
              name="column"
              value={formData.column}
              onChange={handleChange}
              required
            />
            <Button type="submit" variation="primary">
              Soumettre
            </Button>
          </Flex>
        </form>
      </View>
    </Flex>
  );
};

export default TableConfigForm;
