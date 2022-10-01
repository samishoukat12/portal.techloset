import React, { useContext } from 'react'
import axios from 'axios'
import { imageUrl } from '../lib/reactivities/reactiveVarables'
export default function CloudinaryFunction() {
    const endPoint = 'https://api.cloudinary.com/v1_1/dj0mewvg0'
    const [loading, setLoading] = React.useState(false)
    const ctaImageUpdateHandler = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'training-techloset')
        try {
            setLoading(true)
            const res = await axios({
                method: 'POST',
                url: `${endPoint}/image/upload`,
                data: data
            })
            imageUrl(res.data.secure_url)

            console.log(res.data.secure_url);
        } catch (error) {
            console.log(error.message);
        }
        finally {
            setLoading(false)
        }
    }
    return [ctaImageUpdateHandler]
}
