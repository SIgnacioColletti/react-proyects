import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }
    getDocs(docsRef).then((res) => {
      let arrayEntendible = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(arrayEntendible);
    });
  }, [name]);
  if (items.length === 0) {
    return (
      <div className="skeleton-container">
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
          <Skeleton variant="rectangular" width={350} height={100} />
        </div>
      </div>
    );
  }

  return <ItemList items={items} />;
};
