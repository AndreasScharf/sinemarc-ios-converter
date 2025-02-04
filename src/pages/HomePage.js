import FileUpload from "../components/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { setConfigOpenVPN, setPemFile, setProfilName } from "../store";

import Button from 'react-bootstrap/Button';


export default function HomePage() {
  const dispatch = useDispatch();

  const outputFile = useSelector((state) => state.vpn.outputFile);
  const profilName = useSelector((state) => state.vpn.profilName);

  const handleOpenVPNFile = (file, name) => {
    // <pkcs12>*</pkcs12> find and replace the 
    console.log(name.name);
    dispatch(setProfilName(name.name.replace('.ovpn', '')))
    dispatch(setConfigOpenVPN(file))
  }
  const handlePemFile = (file) => {
    dispatch(setPemFile(file))
  }

  const handleDownload = () => {
    const fileName = profilName + ".ovpn"; // Generate filename
    const blob = new Blob([outputFile], { type: "text/plain" }); // Create file blob
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3" >
      <h1>SinemaRC OpenVPN IOS Converter</h1>
      <div>
          The OpenVPN export file from the SinemaRC does not work out of the Box
      </div>

      <div>
        <h3>Configuration File <i>.opvn</i></h3>
        <FileUpload onChange={handleOpenVPNFile} accept=".ovpn"></FileUpload>
      </div>
      <div>
        <h3>PEM File <i>.pem</i></h3>
        <FileUpload onChange={handlePemFile} accept=".pem"></FileUpload>
      </div>
        {outputFile? (
            <div style={{margin: '25px 0'}}>
              <Button onClick={handleDownload}>Download</Button>
            </div>
          ): (<></>)}

    </div>
  );
}

