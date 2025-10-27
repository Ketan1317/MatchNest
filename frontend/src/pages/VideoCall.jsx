import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Copy, Check } from "lucide-react";
import Peer from "peerjs";

const VideoCall = () => {
  const [peerId, setPeerId] = useState(null);
  const [remotePeerId, setRemotePeerId] = useState("");
  const [currentCall, setCurrentCall] = useState(null);
  const [copied, setCopied] = useState(false);

  const peerInstance = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const localStreamRef = useRef(null);

  useEffect(() => {
    // Use public PeerJS cloud server
    const peer = new Peer({
      host: "0.peerjs.com",
      port: 443,
      path: "/",
      secure: true,
    });

    peer.on("open", (id) => {
      console.log("My Peer ID:", id);
      setPeerId(id);
    });

    peer.on("call", async (call) => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        localStreamRef.current = stream;
        if (localVideoRef.current) localVideoRef.current.srcObject = stream;

        call.answer(stream); // Answer the call
        setCurrentCall(call);

        call.on("stream", (remoteStream) => {
          if (remoteVideoRef.current) remoteVideoRef.current.srcObject = remoteStream;
        });

        call.on("close", () => endCall());
      } catch (err) {
        console.error("Error accessing camera/mic:", err);
      }
    });

    peerInstance.current = peer;

    return () => {
      peer.destroy();
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const startCall = async (id) => {
    if (!id) return alert("Please enter a valid Peer ID!");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStreamRef.current = stream;
      if (localVideoRef.current) localVideoRef.current.srcObject = stream;

      const call = peerInstance.current.call(id, stream);
      setCurrentCall(call);

      call.on("stream", (remoteStream) => {
        if (remoteVideoRef.current) remoteVideoRef.current.srcObject = remoteStream;
      });

      call.on("close", () => endCall());
    } catch (err) {
      console.error("Error accessing camera/mic:", err);
    }
  };

  const endCall = () => {
    if (currentCall) currentCall.close();
    setCurrentCall(null);

    if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
    if (localVideoRef.current) localVideoRef.current.srcObject = null;

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  const copyPeerId = () => {
    if (peerId) {
      navigator.clipboard.writeText(peerId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 flex flex-col">
      <Header />

      <section className="bg-gradient-to-r mt-[70px] from-pink-500 to-red-500 text-white text-center py-28 md:py-36 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-michroma drop-shadow-md">
          MatchNest Video Call 📽️
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm">
          Connect instantly with your matches. Start meaningful conversations, have fun, and explore connections in real-time with secure video calls.
        </p>
      </section>

      <div className="flex flex-col items-center mt-10 gap-4 px-4">
        <div className="p-4 bg-white rounded-2xl shadow-md border border-pink-100 w-full max-w-md text-center">
          <p className="text-sm text-gray-500">Your Match ID</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <p className="text-lg font-mono font-semibold text-pink-600">{peerId || "Loading..."}</p>
            <button
              onClick={copyPeerId}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-pink-200 bg-white hover:bg-pink-50 text-pink-600 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 active:scale-95"
            >
              {copied ? <><Check className="w-4 h-4 text-green-500" />Copied!</> : <><Copy className="w-4 h-4" />Copy</>}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-md">
          <input
            type="text"
            placeholder="Enter match's Peer ID"
            value={remotePeerId}
            onChange={(e) => setRemotePeerId(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-pink-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <button
            onClick={() => startCall(remotePeerId)}
            className="px-5 py-2 bg-green-600 cursor-pointer hover:bg-green-700 text-white rounded-lg font-semibold active:scale-95 transition"
          >
            Call
          </button>
          <button
            onClick={endCall}
            disabled={!currentCall}
            className={`px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold active:scale-95 transition ${!currentCall ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            End Call
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-10 px-6 mb-16">
        <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-6 border border-pink-100">
          <h3 className="text-pink-600 mb-3 font-semibold text-lg">Your Video</h3>
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className="w-[520px] h-[360px] rounded-2xl border border-pink-200 object-cover bg-black shadow-inner"
          />
        </div>

        <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-6 border border-pink-100">
          <h3 className="text-pink-600 mb-3 font-semibold text-lg">Match Video</h3>
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-[520px] h-[360px] rounded-2xl border border-pink-200 object-cover bg-black shadow-inner"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideoCall;
