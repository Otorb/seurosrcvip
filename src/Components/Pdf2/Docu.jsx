import {Document, Image, Page, Text, View} from '@react-pdf/renderer';

function Docu({props}) {
  // console.log(props, "props");
  
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
          src="https://i.ibb.co/VTqDhYx/formato2.jpg"
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
            left: "172px",
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
            left: "150px",
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
            left: "378px",
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
          {props.ano}
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
            left: "468px",
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
          {props.bolivares}
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
            top: "537px",
            left: "128px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
            width: "90px", 
            height: "50px"
          }}
          alt="imagen firma cliente"
        />


        <Text
          style={{
            top: "567px",
            left: "211px",
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
            top: "530px",
            left: "370px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
            width: "80px", 
            height: "70px"
          }}
          alt="imagen firma"
        />
        
        
        <Text
          style={{
            top: "623px",
            left: "168px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
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
            top: "633px",
            left: "138px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          {props.inicio}
        </Text>
        <Text
          style={{
            top: "633px",
            left: "228px",
            position: "absolute",
            display: "block",
            fontSize: "10px",
          }}
        >
          {props.fechaFin}
        </Text>
        <Image 
          src="https://i.postimg.cc/FRS21dJh/firma.png"
          style={{
            top: "639px",
            left: "218px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
            width: "80px", 
            height: "70px"
          }}
          alt="imagen firma"
        />
        <Text
          style={{
            top: "704px",
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
            top: "717px",
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
            top: "729px",
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
            top: "729px",
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
            top: "741px",
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
            top: "741px",
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
            top: "741px",
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
            top: "756px",
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
    <Page size="A4">
    <Image
          src="https://i.ibb.co/kQpz5cF/formato1.jpg"
          alt="image base"
          style={{ maxWidth: "1100px", maxHeight: "800" }}
        />
        <Image 
          src="https://i.postimg.cc/FRS21dJh/firma.png"
          style={{
            top: "489px",
            left: "380px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
            width: "80px", 
            height: "70px"
          }}
          alt="imagen firma"
        />
         <Image 
          src={`${props.imagenFirma[0].url}`}
          style={{
            top: "505px",
            left: "80px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
            width: "90px", 
            height: "50px"
          }}
          alt="imagen firma cliente"
        />
         <Text
          style={{
            top: "534px",
            left: "162px",
            position: "absolute",
            display: "block",
            fontSize: "12px",
          }}
        >
          {props.cedula}
        </Text>
    </Page>
  </Document>
  )
}

export default Docu