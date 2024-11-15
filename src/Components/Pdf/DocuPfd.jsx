import {Document, Image, Page, Text, View} from '@react-pdf/renderer';

function DocuPfd() {
  return (
    <Document
    style={{
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      display: "inline-block",
    }}
  >
    <Page size="A4">
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="https://res.cloudinary.com/dsgxo6vlo/image/upload/v1730307619/SeguroBase_page-0001_w0lrvd.jpg"
          alt="image base"
          style={{ maxWidth: "1100px", maxHeight: "800" }}
        />
        <Text
          style={{
            top: "125px",
            left: "380px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          numero{" "}
        </Text>
        <Text
          style={{
            top: "142px",
            left: "162px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          05 03{" "}
        </Text>
        <Text
          style={{
            top: "142px",
            left: "250px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          15 30{" "}
        </Text>
        <Text
          style={{
            top: "142px",
            left: "350px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          05 03{" "}
        </Text>
        <Text
          style={{
            top: "142px",
            left: "434px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          15 30{" "}
        </Text>
        <Text
          style={{
            top: "172px",
            left: "290px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          Nombre del Cliente{" "}
        </Text>
        <Text
          style={{
            top: "186px",
            left: "180px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          documento{" "}
        </Text>
        <Text
          style={{
            top: "186px",
            left: "376px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          telefono{" "}
        </Text>
        <Text
          style={{
            top: "201px",
            left: "170px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          Estado{" "}
        </Text>
        <Text
          style={{
            top: "201px",
            left: "295px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          Ciudad{" "}
        </Text>
        <Text
          style={{
            top: "201px",
            left: "415px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          Sector{" "}
        </Text>
        <Text
          style={{
            top: "236px",
            left: "100px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          placa{" "}
        </Text>
        <Text
          style={{
            top: "236px",
            left: "210px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          marca{" "}
        </Text>
        <Text
          style={{
            top: "236px",
            left: "335px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          modelo{" "}
        </Text>
        <Text
          style={{
            top: "236px",
            left: "435px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          tipo{" "}
        </Text>
        <Text
          style={{
            top: "250px",
            left: "84px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          año{" "}
        </Text>
        <Text
          style={{
            top: "250px",
            left: "140px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          clase{" "}
        </Text>
        <Text
          style={{
            top: "250px",
            left: "275px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          10{" "}
        </Text>
        <Text
          style={{
            top: "250px",
            left: "398px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          400{" "}
        </Text>
        <Text
          style={{
            top: "250px",
            left: "465px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          color{" "}
        </Text>
        <Text
          style={{
            top: "264px",
            left: "130px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          serial{" "}
        </Text>
        <Text
          style={{
            top: "264px",
            left: "305px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          carroceria{" "}
        </Text>
        <Text
          style={{
            top: "289px",
            left: "210px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          punto{" "}
        </Text>
        <Text
          style={{
            top: "289px",
            left: "395px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          ejecutivo{" "}
        </Text>
        <Text
          style={{
            top: "312px",
            left: "173px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          tcr{" "}
        </Text>
        <Text
          style={{
            top: "312px",
            left: "225px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          bolivar{" "}
        </Text>
        <Text
          style={{
            top: "329px",
            left: "225px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          bolivar2{" "}
        </Text>
        <Text
          style={{
            top: "329px",
            left: "317px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          S{" "}
        </Text>
        <Text
          style={{
            top: "329px",
            left: "345px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          N{" "}
        </Text>
        <Text
          style={{
            top: "329px",
            left: "430px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          100{" "}
        </Text>
        <Text
          style={{
            top: "340px",
            left: "165px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          E{" "}
        </Text>
        <Text
          style={{
            top: "344px",
            left: "190px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          D{" "}
        </Text>
        <Text
          style={{
            top: "344px",
            left: "213px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          B{" "}
        </Text>
        <Text
          style={{
            top: "344px",
            left: "275px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          P{" "}
        </Text>
        <Text
          style={{
            top: "344px",
            left: "343px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          V{" "}
        </Text>
        <Text
          style={{
            top: "344px",
            left: "385px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          OTRO{" "}
        </Text>
        <Text
          style={{
            top: "580px",
            left: "145px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          firma{" "}
        </Text>
        <Text
          style={{
            top: "580px",
            left: "200px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          cedula{" "}
        </Text>
        <Image 
          src="https://t4.ftcdn.net/jpg/00/72/71/15/360_F_72711585_7eiKcdeXcSpyzq9e4rvWC96uTywimcPk.jpg"
          style={{
            top: "560px",
            left: "370px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
            width: "50px", 
            height: "50px"
          }}
          alt="imagen firma"
        />
        
        
        <Text
          style={{
            top: "637px",
            left: "170px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          numero{" "}
        </Text>
        <Text
          style={{
            top: "648px",
            left: "185px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          s{" "}
        </Text>
        <Text
          style={{
            top: "648px",
            left: "205px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          n{" "}
        </Text>
        <Text
          style={{
            top: "648px",
            left: "260px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          100{" "}
        </Text>
        <Text
          style={{
            top: "660px",
            left: "133px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          03 10{" "}
        </Text>
        <Text
          style={{
            top: "660px",
            left: "220px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          03 10{" "}
        </Text>
       
        <Text
          style={{
            top: "708px",
            left: "358px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          Datos del Cliente{" "}
        </Text>
        <Text
          style={{
            top: "720px",
            left: "368px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          Documento{" "}
        </Text>
        <Text
          style={{
            top: "732px",
            left: "324px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          marca{" "}
        </Text>
        <Text
          style={{
            top: "732px",
            left: "462px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          modelo{" "}
        </Text>
        <Text
          style={{
            top: "744px",
            left: "316px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          año{" "}
        </Text>
        <Text
          style={{
            top: "744px",
            left: "368px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          color{" "}
        </Text>
        <Text
          style={{
            top: "744px",
            left: "462px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          placa{" "}
        </Text>
        <Text
          style={{
            top: "759px",
            left: "368px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          serial{" "}
        </Text>
      </View>
    </Page>
  </Document>
  )
}

export default DocuPfd