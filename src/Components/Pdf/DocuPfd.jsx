import {Document, Image, Page, Text, View} from '@react-pdf/renderer';

function DocuPfd({props}) {
  console.log(props, "props");
  
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
          {props.numero}
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
          {props.inicio}
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
          {props.horaInicio}
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
          {props.fechaFin}
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
          {props.horaFin}
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
          {props.nombre}
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
          {props.cedula}
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
          {props.telefono}
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
          {props.estado}
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
          {props.ciudad}
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
          {props.sector}
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
          {props.placa}
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
          {props.marca}
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
          {props.modelo}
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
          {props.tipo}
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
          año{props.ano}
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
          {props.clase}
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
          {props.puesto}
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
          {props.carga}
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
          {props.color}
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
          {props.motor}
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
          {props.carroceria}
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
          .
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
          .
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
          {props.tcr}
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
          .
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
          .
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
          .
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
          .
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
          .
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
          .
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
         .
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
          .
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
          .
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
          .
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
          .
        </Text>

        <Image 
          src={`${props.imagenFirma[0].url}`}
          style={{
            top: "567px",
            left: "145px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
            width: "70px", 
            height: "30px"
          }}
          alt="imagen firma cliente"
        />


        <Text
          style={{
            top: "580px",
            left: "208px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          {props.cedula}
        </Text>
        <Image 
          src="https://i.postimg.cc/FRS21dJh/firma.png"
          style={{
            top: "540px",
            left: "370px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
            width: "100px", 
            height: "80px"
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
          {props.numero}
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
         .
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
         .
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
          .
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
          {props.inicio}
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
          {props.fechaFin}
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
          {props.nombre}
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
          {props.cedula}
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
          {props.marca}
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
          {props.modelo}
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
          {props.ano}
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
          {props.color}
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
          {props.placa}
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
          {props.carroceria}
        </Text>
      </View>
    </Page>
  </Document>
  )
}

export default DocuPfd