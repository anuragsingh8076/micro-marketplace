import { View, Text, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(r => r.json())
      .then(setProducts);
  }, []);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={{ padding: 12 }}>
          <Image source={{ uri: item.image }} style={{ height: 150 }} />
          <Text>{item.title}</Text>
          <Text>${item.price}</Text>
        </View>
      )}
    />
  );
}
