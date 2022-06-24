from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class C16(Base):
    __tablename__ = "C16"

    id = Column(Integer, primary_key=True)
    name = Column(String(128))
    spec = Column(String(128))

class C17(Base):
    __tablename__ = "C17"

    id = Column(Integer, primary_key=True)
    name = Column(String(128))
    spec = Column(String(128))
