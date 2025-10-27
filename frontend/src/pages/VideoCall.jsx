import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Copy, Check } from "lucide-react";
import Footer from "../components/Footer";
import Peer from "peerjs";

const VideoCall = () => {
  const [peerId, setPeerId] = useState(null);
  const [remotePeerId, setRemotePeerId] = useState("");
  const [currentCall, setCurrentCall] = useState(null);
  const [copied, setCopied] = useState(false);
  const [autoCalled, setAutoCalled] = useState(false); // To prevent multiple auto-calls

  const peerInstance = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const localStreamRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const peer = new Peer();

    peer.on("open", (id) => {
      setPeerId(id);

      // Check if there’s a ?peerId= param (for auto-connect)
      const params = new URLSearchParams(location.search);
      const incomingPeerId = params.get("peerId");
      if (incomingPeerId && incomingPeerId !== id) {
        setRemotePeerId(incomingPeerId);
      }
    });

    // When someone calls this peer
    peer.on("call", (call) => {
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then((stream) => {
          localStreamRef.current = stream;
          if (localVideoRef.current) localVideoRef.current.srcObject = stream;
          call.answer(stream);
          setCurrentCall(call);

          call.on("stream", (remoteStream) => {
            if (remoteVideoRef.current)
              remoteVideoRef.current.srcObject = remoteStream;
          });

          call.on("close", () => endCall());
        })
        .catch((err) => console.error("Error accessing camera/mic:", err));
    });

    peerInstance.current = peer;

    return () => {
      // Cleanup on unmount
      peer.destroy();
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  // Automatically start a call if peerId is in URL and we have our peerId ready
  useEffect(() => {
    if (peerId && remotePeerId && !autoCalled) {
      setAutoCalled(true);
      startCall(remotePeerId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peerId, remotePeerId, autoCalled]);

  const startCall = (id) => {
    if (!id) return alert("Please enter a valid Peer ID!");
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        localStreamRef.current = stream;
        if (localVideoRef.current) localVideoRef.current.srcObject = stream;

        const call = peerInstance.current.call(id, stream);
        setCurrentCall(call);

        call.on("stream", (remoteStream) => {
          if (remoteVideoRef.current)
            remoteVideoRef.current.srcObject = remoteStream;
        });

        call.on("close", () => endCall());
      })
      .catch((err) => console.error("Error accessing camera/mic:", err));
  };

  const endCall = () => {
    if (currentCall) {
      currentCall.close();
      setCurrentCall(null);
    }

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

  const shareLink = () => {
    if (!peerId) return;
    const baseUrl = "https://match-nest-zeta.vercel.app/vc";
    const fullLink = `${baseUrl}?peerId=${peerId}`;

    navigator.clipboard.writeText(fullLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r mt-[70px] from-pink-500 to-red-500 text-white text-center py-28 md:py-36 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-michroma drop-shadow-md">
          MatchNest Video Call 📽️
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm">
          Connect instantly with your matches. Start meaningful conversations,
          have fun, and explore connections in real-time with secure video
          calls.
        </p>
      </section>

      {/* Controls */}
      <div className="flex flex-col items-center mt-10 gap-4 px-4">
        <div className="p-4 bg-white rounded-2xl shadow-md border border-pink-100 w-full max-w-md text-center">
          <p className="text-sm text-gray-500">Your Match ID</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <p className="text-lg font-mono font-semibold text-pink-600">
              {peerId || "Loading..."}
            </p>
            <button
              onClick={copyPeerId}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-pink-200 bg-white 
             hover:bg-pink-50 text-pink-600 font-medium text-sm shadow-sm 
             hover:shadow-md transition-all duration-300 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
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
            className={`px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold active:scale-95 transition ${
              !currentCall ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            End Call
          </button>
        </div>

        {/* Share Button
        <button
          onClick={shareLink}
          className="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold active:scale-95 transition"
        >
          {copied ? "Link Copied!" : "Share Link"}
        </button> */}
      </div>

      {/* Video */}
     <div className="flex mb-20 flex-wrap justify-center gap-10 mt-10 px-6 mb-16">
  <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-6 border border-pink-100 transition-all hover:shadow-xl hover:-translate-y-1">
    <h3 className="text-pink-600 mb-3 font-semibold text-lg">Your Video</h3>
    <video
      ref={localVideoRef}
      autoPlay
      playsInline
      muted
      className="w-[420px] h-[300px] md:w-[520px] md:h-[360px] rounded-2xl border border-pink-200 object-cover bg-black shadow-inner"
    />
  </div>

  <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-6 border border-pink-100 transition-all hover:shadow-xl hover:-translate-y-1">
    <h3 className="text-pink-600 mb-3 font-semibold text-lg">Match Video</h3>
    <video
      ref={remoteVideoRef}
      autoPlay
      playsInline
      className="w-[420px] h-[300px] md:w-[520px] md:h-[360px] rounded-2xl border border-pink-200 object-cover bg-black shadow-inner"
    />
  </div>
</div>


      <Footer />
    </div>
  );
};

export default VideoCall;
