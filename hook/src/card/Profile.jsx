import Avatar from "./Avatar";
import imgPhoto from "../assets/photo.jpg"
import Card from "./Card";


export default function Profile(){

    return(
        <>
            <div>
                <Card>
                    <Avatar
                        size = {{
                            width: "200px",
                            height: "250px"
                        }}
                        person ={{
                            name: "이주빈",
                            imgUrl: imgPhoto
                        }}
                    />
                </Card>
            </div>
        </>
    )
}