function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-pink-500 to-blue-600">
                <div class="w-1/2 bg-white bg-opacity-50 rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        kartu Tanda Penduduk
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-black-900"
                                for="NIK"
                            >
                                NIK
                            </label>
                            <input
                                class="border py-2 px-3 text-Black-800"
                                type="text"
                                name="NIK"
                                id="NIK"
                                placeholder="7103241611630001"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                        <label
                            class="mb-0 font-bold text-lg text-black-900"
                            for="Nama"
                        >
                            Nama
                        </label>
                        <input
                            class="border py-2 px-2 px-3 text-black-800"
                            type="text"
                            name="nama"
                            id="nama"
                            placeholder="Jerianto Mandalika"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                    <label
                        class="mb-0 font-bold text-lg text-Black-900"
                        for=""
                    >
                    TEMPAT
                    </label>
                    <input
                        class="border py-2 px-3 text-black-800"
                        type="text"
                        name="Tempat"
                        id="Tempat"
                        placeholder="Tahuna"
                    />
                     </div>
                    <div class="flex flex-col mb-4">
                    <label
                        class="mb-0 font-bold text-lg text-Black-900"
                        for="Tempat"
                    >
                    Tanggal Lahir
                    </label>
                    <input
                        class="border py-2 px-3 text-Black-800"
                        type="text"
                        name="Tanggal Lahir"
                        id="Tanggal Lahir"
                        placeholder="15/07/2003"
                    />
                     </div>
                    <div class="flex flex-col mb-4">
                    <label
                        class="mb-0 font-bold text-lg text-Black-900"
                        for="Alamat"
                    >
                    Jenis Kelamin
                    </label>
                    <input
                        class="border py-2 px-3 text-Black-800"
                        type="text"
                        name="Jenis kelamin"
                        id="Jenis Kelamin"
                        placeholder="Laki-Laki"
                    />
                </div>
                
                <img class="rounded w-40 h-60" src="IMG_20220401_221300.JPG"/>
                </form>
                <a
                    class="block w-full text-center no-underline mt-4 text-sm text-black-700 hover:text-black-900"
                    href="/"
                    >
                        Telah Memiliki Akun?
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;