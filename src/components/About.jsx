import { makeStyles, tokens, Divider } from "@fluentui/react-components";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    width: "70vw",
    minHight: "100vh",
  },
  example: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "96px",
    backgroundColor: "inherit",
    width: "100%",
    textAlign: "justify",
  },
  header: {
    fontSize: "1.3rem",
    color: "red",
  },
});

function About() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.example}>
        <Divider className={styles.header} inset>
          About Us
        </Divider>
      </div>
      <div className={styles.example}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus
        ad iure doloremque nostrum aspernatur odio perspiciatis voluptate omnis
        eum repellat placeat cumque sapiente architecto unde aperiam, eveniet
        id. Explicabo voluptatibus necessitatibus harum dignissimos odio nulla,
        animi voluptates nesciunt, dolor est aspernatur quis reprehenderit quo
        veritatis a, obcaecati impedit deleniti ullam? Expedita quisquam culpa
        dolore optio nesciunt, cum ducimus laudantium natus consectetur,
        excepturi modi adipisci. Est ratione voluptatum cum voluptas. Alias
        fugit quos doloribus modi, dolores nemo labore optio error. Sed atque
        mollitia repellat voluptatibus illum saepe ullam fuga? Natus, libero
        sint. Saepe reprehenderit, ut voluptates autem esse temporibus velit!
        Odit quas error quae. Commodi quibusdam repudiandae error at cupiditate
        explicabo consequatur, odio eos quis molestiae debitis autem alias
        itaque exercitationem a nesciunt, rem ratione omnis laudantium totam
        maiores voluptate! In voluptas enim omnis! Sequi et obcaecati molestias
        deleniti facilis! Quis quam non vitae inventore aspernatur temporibus,
        eos facilis a mollitia doloremque! Dolores tempora in odio odit deserunt
        ut omnis enim molestiae esse voluptates! Modi tempora obcaecati placeat
        vitae unde necessitatibus architecto ipsam ex et reiciendis accusantium
        porro totam, officiis voluptatum atque ad quis cupiditate mollitia ab
        fugit rem eligendi laboriosam eos. Illum dolores quas ipsam mollitia
        perferendis est reiciendis. Harum provident temporibus quibusdam fuga
        sequi illum voluptatum, quisquam eius eum officiis modi optio nemo magni
        repellendus architecto ullam autem omnis iusto rem voluptates voluptas
        nam ipsam. Veritatis dolore quasi ducimus, consectetur molestiae
        incidunt corporis molestias reprehenderit magni voluptate? Ipsam
        deleniti illo praesentium aspernatur, ratione laborum repellendus quo
        voluptatibus officiis repellat reprehenderit, molestias autem a iste,
        voluptatem quaerat distinctio illum cupiditate numquam vel quasi! Vero
        quasi earum doloremque accusamus quam. Minus laboriosam consequuntur
        veritatis qui commodi esse quidem amet omnis quo eos itaque ratione
        eaque adipisci voluptate minima ipsa animi perspiciatis et, quaerat
        aliquam non exercitationem numquam magni. Delectus obcaecati praesentium
        cum eaque ab id fugit, cumque sequi ducimus corporis officia ut? Quas
        minus at earum eligendi rerum mollitia enim distinctio, expedita esse
        non reprehenderit harum voluptatibus officia iusto facilis. Ipsa iure
        fuga minus recusandae pariatur placeat mollitia, illo nemo debitis
        corrupti suscipit ex exercitationem vero maiores quidem! Cupiditate sit
        amet eveniet laudantium esse quo natus necessitatibus at numquam, quas
        suscipit aliquam quod perspiciatis consectetur quae nostrum praesentium
        molestiae architecto atque non inventore libero doloremque sed. Cum,
        mollitia tempora corrupti voluptas, ut sint ipsa numquam architecto
        doloremque officia ex tempore? Id, distinctio hic accusamus maxime ipsa
        voluptates repellat voluptatem alias delectus? Saepe corporis modi
        repellendus dolorem exercitationem, earum similique deserunt est ipsa at
        perferendis facere quos cumque maiores voluptas recusandae, quidem
        debitis maxime reprehenderit ipsum tempora, officia ducimus. Nihil
        asperiores sapiente nam ab animi placeat obcaecati iure rerum id quasi
        perferendis temporibus facilis aliquid accusantium fugiat eos, sunt
        voluptas reiciendis rem! Saepe non eaque itaque eveniet magnam,
        repellendus sapiente suscipit exercitationem similique quidem culpa
        vitae fuga voluptas ipsam libero enim ducimus quasi error eos vel
        reprehenderit quaerat voluptatibus. Saepe eum necessitatibus quas enim
        nostrum, eos officiis ducimus doloremque dolore fugiat consequuntur cum
        perspiciatis maxime distinctio repellat debitis expedita illo optio!
      </div>
    </div>
  );
}

export default About;
