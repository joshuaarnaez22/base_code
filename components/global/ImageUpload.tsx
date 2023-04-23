import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

type ImageFile = {
  setImage: (image: any) => void;
};
const ImageUpload = ({ setImage }: ImageFile) => {
  const [imagePreview, setImagePreview] = useState('');

  const handleFileSelect = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImage(file);
    } else {
      setImagePreview('');
      setImage(null);
    }
  };

  return (
    <Box>
      {imagePreview ? (
        <Flex alignItems="center" justifyContent="center">
          <Image src={imagePreview} w="200px" h="200px" />
        </Flex>
      ) : (
        <Box borderWidth="1px" p={2} rounded="md">
          <Text textAlign="center">No image selected</Text>
        </Box>
      )}

      <FormControl mt={4}>
        <FormLabel>Select an image to upload</FormLabel>
        <input type="file" accept="image/*" onChange={handleFileSelect} />
      </FormControl>
    </Box>
  );
};

export default ImageUpload;
